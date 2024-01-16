const UploadForm = ({isVisible , onChange, onSubmit}) => {
    return (
        isVisible && <>
       
       <p className="display-6 text-center mb-3">Upload Stock Image</p>
       <div className="mb-5 d-flex align-items-center justify-content-center">
         <form className="mb-2" style={{ textAlign: "left" }}  onSubmit = {onSubmit}>
           <div className="mb-3">
             <input
               type="text"
               className="form-control"
               name="title"
               placeholder="title"
               aria-describedby="text"
               onChange = {onChange}
             />
           </div>
           <div className="mb-3">
             <input type="file" className="form-control" name="file" onChange = {onChange}/>
           </div>
           <button
             type="submit"
             className="btn btn-success float-end"
           >
             Save changes
           </button>
         </form>
       </div>
      </>
    );
  };
  export default UploadForm;
  