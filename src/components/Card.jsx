export default function Card(props) {
  const handleImageClick = () => {
    props.setEnlargedImage(`/assets/videos/${props.video}`);
  };

  return (
    <article
      className={`${
        props.isBig ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
      }`}
      onClick={handleImageClick}
    >
      <img
        className="aspect-[3/4] object-cover lg:aspect-[4/3]"
        src={`/assets/images/${props.img}`}
        alt=""
      />
    </article>
  );
}
