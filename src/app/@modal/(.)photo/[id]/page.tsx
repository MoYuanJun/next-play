import photos from '../../../data';

const Context = ({ params: { id } }: { params: { id: string } }) => {
  const photo = photos.find((p) => p.id === id);

  return (
    <div>
      <p>预览</p>
      <img src={photo?.src} />
    </div>
  );
};

export default Context;
