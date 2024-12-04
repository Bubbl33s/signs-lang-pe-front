import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useSigns from '../hooks/useSigns';
import DragDrop from './DragDrop';
import CategorySelect from './CategorySelect';
import LabelSelect from './LabelSelect';
import { ContentService } from '../services/contentService';

type FormData = {
  file: File | null;
  contributorId: string;
  categoryId?: string;
  labelName?: string;
  labelId?: string;
};

export default function UploadContentForm() {
  const { register, handleSubmit, setValue, watch, reset } = useForm();
  const [isRegistered, setIsRegistered] = useState(true);
  const { state } = useSigns();
  const [filteredList, setFilteredList] = useState(state.signsList);

  const [labelId, setLabelId] = useState('');
  const [labelName, setLabelName] = useState('');
  const [categoryId, setCategoryId] = useState('');
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

  const onSubmit = async (data: any) => {
    console.log('Form sent');
    console.log(data);
    // const form = e.target as HTMLFormElement;
    // form.elements.namedItem('label-id') &&
    //   setLabelId(
    //     (form.elements.namedItem('label-id') as HTMLInputElement).value
    //   );
    // setCategoryId(
    //   (form.elements.namedItem('category-id') as HTMLInputElement).value
    // );
    // if (!file) {
    //   console.log('no hay archivo');
    // }
    // if (isRegistered) {
    //   console.log('enviado con labelId');
    //   await ContentService.postContent({
    //     file,
    //     contributorId: '674a14e861abe6c6fceff19a',
    //     labelId,
    //   });
    //   setFile(null);
    // } else {
    //   console.log('enviado sin labelId');
    //   await ContentService.postContent({
    //     file,
    //     contributorId: '674a14e861abe6c6fceff19a',
    //     categoryId,
    //     labelName,
    //   });
    //   setFile(null);
    // }
  };

  const onErrors = (errors: any) => {
    console.log(errors);
  };

  return (
    <form
      className="space-y-3 divide-y-2 divide-purple-200"
      onSubmit={handleSubmit(onSubmit, onErrors)}
    >
      <div>
        <label className="inline-flex items-center cursor-pointer gap-3">
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
          <label htmlFor="categories" className="block mb-1">
            Categorías
          </label>
          <CategorySelect
            defaultText="Selecciona una categoría"
            // {...register('categoryId', { required: true })}
          />
          <input
            type="text"
            value={categoryId}
            hidden
            {...register('categoryId', { required: true })}
          />
        </div>

        <div>
          <label
            htmlFor={isRegistered ? 'label' : 'label-name'}
            className="block mb-1"
          >
            Palabra
          </label>
          {isRegistered ? (
            <LabelSelect labels={filteredList} setLabelId={setLabelId} />
          ) : (
            <input
              type="text"
              id="label-name"
              className="bg-gray-50 border border-purple-400 text-gray-900 text-sm rounded-md focus:ring-purple-500 focus:border-purple-500 block w-full p-2 h-[37px]"
              placeholder="Ingresa la palabra"
              {...register('labelName', { required: true })}
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
