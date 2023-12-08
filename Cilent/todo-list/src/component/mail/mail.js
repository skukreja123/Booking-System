import "./mail.css"

const mail = () => {
  return (
    <div className="mail">
      <h1 className="mailtitle">Save Time, Save  Money</h1>
      <span className="maildec">Sign up and we 'll send the best details to you</span>
      <div className="mailinputcontainor">
        <input type="text" placeholder="Enter the Email" />
        <button>Subscribe</button>
      </div>

    </div>
  )
}

export default mail
