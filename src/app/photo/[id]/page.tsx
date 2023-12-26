import photos from '../../data';

const Context = ({ params: { id } }: { params: { id: string } }) => {
  const photo = photos.find((p) => p.id === id);

  return (
    <img
      style={{
        width: '50%',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
      src={photo?.src}
    />
  );
};

export default Context;
