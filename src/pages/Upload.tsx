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
  borderColor: '#2196f3',
};

const acceptStyle = {
  borderColor: '#86efac',
  backgroundColor: '#dcfce7',
};

const rejectStyle = {
  borderColor: '#ff1744',
  backgroundColor: '#ffa8b9',
};

export default function Upload() {
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
    <div>
      <p>Cargar imágenes</p>

      <div className="container">
        <div {...getRootProps({ style })}>
          <input {...getInputProps()} />
          <p className="text-center">
            Arrastra aquí la imagen o haz click para seleccionar un archivo
          </p>
        </div>
      </div>
      <aside>
        <img src={file || 'a'} />
      </aside>
    </div>
  );
}
