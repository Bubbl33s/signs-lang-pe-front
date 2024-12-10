import { ColorRing } from 'react-loader-spinner';

export default function LoadingSpinner() {
  return (
    <div className="flex flex-col justify-center items-center py-5">
      <ColorRing
        visible={true}
        height="50"
        width="50"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={['#d8b4fe', '#c084fc', '#a855f7', '#9333ea', '#7e22ce']}
      />

      <p>Cargando...</p>
    </div>
  );
}
