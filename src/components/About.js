import React, {useState} from 'react'

export default function About(props) {
  // const [mystyle, setmystyle] =  useState({
  //   color: 'black',
  //   backgroundColor: 'white'
  // });
  let mystyle = {
    color: props.mode == 'dark' ? 'white' : '042743',
    backgroundColor: props.mode == 'dark' ? 'rgb(36 74 104)' : 'white',
    border: '2px solid',
    borderColor: props.mode === 'dark' ? 'white' : '042743',
  }

  // const [btntext, setbtntext] = useState('Enable Dark Mode');
  // const togglestyle = () => {
  //   if(mystyle.color == 'black') {
  //     setmystyle({
  //       color: 'white',
  //       backgroundColor: 'black',
  //       border: '1px solid white'
  //     })
  //     setbtntext("Enable Light Mode");
  //   } else {
  //     setmystyle({
  //       color: 'black',
  //       backgroundColor: 'white'
  //     })
  //     setbtntext("Enable Light Mode");
  //   }
  // }
  return (
    <div className = "container" style = {{color: props.mode == 'dark' ? 'white' : '042743'}}>
      <h1 className = "my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
    <div className="accordion-item">
    <h2 className="accordion-header">
    <button className="accordion-button" style = {mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
    <strong>Introduction to TextUtils</strong>
    </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
    <div className="accordion-body" style = {mystyle}>
    TextUtils is a versatile online tool created to streamline the process of text manipulation. Whether you're a student, writer, or developer, TextUtils offers a wide array of features, such as converting text to uppercase, lowercase, or capitalizing each word. The site’s user-friendly interface allows for easy access to these tools.
</div>
    </div>
    </div>
    <div className="accordion-item">
    <h2 className="accordion-header">
    <button className="accordion-button collapsed" style = {mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
    <strong>Features of TextUtils</strong>
        </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
    <div className="accordion-body" style = {mystyle}>
    TextUtils provides several essential utilities, including word and character counters, removal of extra spaces, and sentence case conversions. It also supports text analysis by giving insights into the length and complexity of your text. These features make it an indispensable resource for anyone working with large amounts of text.    </div>
    </div>
    </div>
    <div className="accordion-item">
    <h2 className="accordion-header">
    <button className="accordion-button collapsed" style = {mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
    <strong>Ease of Use</strong>
    </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
    <div className="accordion-body" style = {mystyle}>
    With a clean and minimalistic design, TextUtils is easy to navigate, making it suitable for both casual users and professionals. Users can simply input their text and apply various transformations without the need for complicated processes. It’s a reliable tool for quick and efficient text adjustments.    </div>
    </div>
    </div>
    </div>
    {/* <div className="container my-3">
    <button onClick = {togglestyle} type = "button" className="btn btn-primary">{btntext}</button>
    </div> */}
    </div>
  )
}
