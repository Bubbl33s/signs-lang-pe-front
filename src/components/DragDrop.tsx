import { CSSProperties, useMemo, useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const baseStyle: CSSProperties = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#d8b4fe',
  borderStyle: 'dashed',
  backgroundColor: '#f3e8ff',
  color: '#707070',
  outline: 'none',
  transition: 'all .24s ease-in-out',
};

const focusedStyle = {
  borderColor: '#c58eff',
};

const acceptStyle = {
  borderColor: '#86efac',
  backgroundColor: '#dcfce7',
};

const rejectStyle = {
  borderColor: '#ff1744',
  backgroundColor: '#ffa8b9',
};

export default function DragDrop() {
  const [file, setFile] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFile(URL.createObjectURL(acceptedFiles[0]));
  }, []);

  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({ accept: { 'image/*': [] }, onDrop });

  const style: CSSProperties = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  return (
    <div className="flex h-52 items-center justify-center">
      <div
        className={`${file != null ? 'hidden' : 'flex'} hover:text-gray-900`}
      >
        <div {...getRootProps({ style })} className="hover:cursor-pointer">
          <input {...getInputProps()} id="imagen" name="imagen" />
          <p className="text-center">
            Arrastra aquí la imagen o haz click para seleccionar un archivo
          </p>
        </div>
      </div>

      {file && (
        <div className="h-full flex flex-col justify-between items-center">
          <img src={file} className="h-40 object-contain" />

          <div className="flex gap-2">
            <button
              className="bg-purple-300 border border-purple-500 rounded-md py-2 px-3 text-sm hover:bg-purple-500 hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault();
                setFile(null);
              }}
            >
              Elegir otra imagen
            </button>

            <input
              type="submit"
              value="Subir imagen"
              className="bg-green-500 rounded-md py-2 px-3 text-sm font-bold text-white border border-green-500 hover:bg-green-300 hover:text-black transition-colors hover:cursor-pointer"
            />
          </div>
        </div>
      )}
    </div>
  );
}
