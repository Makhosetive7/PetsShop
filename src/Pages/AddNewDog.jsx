import React, { useRef } from 'react'

const AddNewDog = () => {

  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    


//Posting form Data to firebase
    fetch(
      "https://dogsite-data-default-rtdb.firebaseio.com/.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "content-type" : 'application/json'
        }
      }
    );
  }

  return (
    <div>
      <form  onSubmit={submitHandler}>
        <div >
          <label htmlFor='title'>Meetup Title</label>
          <input type='text' required id='title' ref={titleInputRef} />
        </div>
        <div >
          <label htmlFor='image'>Meetup Image</label>
          <input type='url' required id='image' ref={imageInputRef} />
        </div>
        <div >
          <label htmlFor='address'>Address</label>
          <input type='text' required id='address' ref={addressInputRef} />
        </div>
        <div >
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            required
            rows='5'
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div >
          <button>Add Meetup</button>
        </div>
      </form>
    </div>
  )
}

export default AddNewDog
