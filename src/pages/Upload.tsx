import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useSigns from '../hooks/useSigns';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import DragDrop from '../components/DragDrop';
import CategorySelect from '../components/CategorySelect';
import LabelSelect from '../components/LabelSelect';
import { ContentService } from '../services/contentService';
import { LabelService } from '../services/labelService';
import { showToast } from '../helpers/toastify';
import { onErrors } from '../helpers/onErrors';
import 'toastify-js/src/toastify.css';
import '../assets/styles/Toastify.css';

type FormData = {
  categoryId?: string;
  labelId?: string;
  labelName?: string;
};

export default function Upload() {
  const { register, handleSubmit, setValue, reset } = useForm<FormData>();
  const [isRegistered, setIsRegistered] = useState(true);
  const { state, dispatch } = useSigns();
  const { user } = useContext(AuthContext);

  const [filteredList, setFilteredList] = useState(state.signsList);
  const [labelId, setLabelId] = useState('');
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    setFilteredList(
      state.signsList.filter((sign) =>
        state.currentCategory
          ? sign.categoryId === state.currentCategory._id
          : sign
      )
    );
  }, [state.currentCategory, state.signsList]);

  useEffect(() => {
    if (state.currentCategory) {
      setValue('categoryId', state.currentCategory._id);
    }
  }, [state.currentCategory, setValue]);

  useEffect(() => {
    if (labelId) {
      setValue('labelId', labelId);
    }
  });

  useEffect(() => {
    dispatch({ type: 'set-current-category', payload: null });
  }, []);

  const onSubmit = async (data: FormData) => {
    if (!file) {
      showToast({
        text: 'Sube una imagen',
        color: 'error',
      });

      return;
    }

    if (!user?._id) {
      showToast({
        text: 'Sesión no iniciada',
        color: 'error',
      });

      return;
    }

    let response;
    let updateLabels = false;

    if (isRegistered) {
      response = await ContentService.postContent({
        file,
        labelId: data.labelId,
        contributorId: user._id,
      });
    } else {
      response = await ContentService.postContent({
        file,
        categoryId: data.categoryId,
        labelName: data.labelName,
        contributorId: user._id,
      });

      updateLabels = true;
    }

    if (response?.status === 200 || response?.status === 201) {
      showToast({
        text: 'Imagen cargada',
        color: 'success',
      });

      reset();
      setFile(null);

      if (updateLabels) {
        const labels = await LabelService.getSigns();
        dispatch({ type: 'set-signs-list', payload: labels });
      }
    } else {
      showToast({
        text: 'Error al cargar la imagen',
        color: 'error',
      });
    }
  };

  return (
    <form
      className="space-y-3 divide-y-2 divide-purple-200"
      onSubmit={handleSubmit(onSubmit, onErrors)}
    >
      <div className="flex justify-center">
        <label
          className="inline-flex items-center cursor-pointer gap-3 mx-auto"
          htmlFor="is-registered"
        >
          <span
            className={`font-medium ${
              isRegistered ? 'text-gray-900' : 'text-gray-400'
            }`}
          >
            Palabra registrada
          </span>
          <input
            type="checkbox"
            id="is-registered"
            value=""
            className="sr-only peer"
            onChange={(e) => setIsRegistered(!e.target.checked)}
          />
          <div className="relative w-11 h-6 bg-purple-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-500"></div>
          <span
            className={`font-medium ${
              isRegistered ? 'text-gray-400' : 'text-gray-900'
            }`}
          >
            Nueva palabra
          </span>
        </label>
      </div>

      <div className="pt-3">
        <div className="mb-3">
          <label htmlFor="categories" className="inline-block mb-1">
            Categorías
          </label>
          <CategorySelect defaultText="Selecciona una categoría" />
          <input
            type="text"
            value={state.currentCategory ? state.currentCategory._id : ''}
            id="categories"
            hidden
            {...register('categoryId', {
              required: !isRegistered ? 'Selecciona la categoría' : false,
            })}
          />
        </div>

        <div>
          <label
            htmlFor={isRegistered ? 'label' : 'label-name'}
            className="inline-block  mb-1"
          >
            Palabra
          </label>
          {isRegistered ? (
            <div>
              <LabelSelect labels={filteredList} setLabelId={setLabelId} />
              <input
                type="text"
                id="label"
                value={labelId}
                hidden
                {...register('labelId', {
                  required: isRegistered ? 'Selecciona la palabra' : false,
                })}
              />
            </div>
          ) : (
            <input
              type="text"
              id="label-name"
              className="bg-gray-50 border border-purple-400 text-gray-900 text-sm rounded-md focus:ring-purple-500 focus:border-purple-500 block w-full p-2 h-[37px]"
              placeholder="Ingresa la palabra"
              {...register('labelName', {
                required: !isRegistered ? 'Ingresa la palabra' : false,
              })}
            />
          )}
        </div>
      </div>

      <div className="pt-3">
        <DragDrop file={file} setFile={setFile} />
      </div>
    </form>
  );
}
