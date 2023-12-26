import photos from '../../data';

const Context = ({ params: { id } }: { params: { id: string } }) => {
  const photo = photos.find((p) => p.id === id);

  return (
    <img
      src={photo?.src}
      style={{ width: 400 }}
    />
  );
};

export default Context;
