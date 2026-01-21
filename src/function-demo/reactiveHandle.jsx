function Button({ onClick, children }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}

function PlayButton({ movieName }) {
  function handlePlayClick() {
    console.log(`Playing ${movieName}`);
  }

  return (
    <Button onClick={handlePlayClick}>
      Play "{ movieName }"
    </Button>
  )
}

function UploadButton({ movieName }) {
  return (
    <Button onClick={() => console.log(`Uploading ${movieName}`)}>
      Upload "{ movieName }"
    </Button>
  )
}

export default function Toolbar() {
  return (
    <div>
      <PlayButton movieName="The Matrix" />
      <UploadButton movieName="The Magic" />
    </div>
  )
}


