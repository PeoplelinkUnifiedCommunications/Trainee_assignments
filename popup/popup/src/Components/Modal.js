import React, {useState} from 'react'
import './Modal.css'


const Modal = () => {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
      setModal(!modal);
    };
  
    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }
  
    return (
      <>
        <button onClick={toggleModal} className="btn-modal">
          Open
        </button>
         <p style={{padding:'20px', lineHeight:'30px'}}>
         Lorem ipsum dolor sit amet coempore numquam nam rerum amet porro aspernatur. Quam officiis sint atque placeat amet repudiandae corrupti totam ab vel perferendis cum dicta, sunt id autem tempore earum tenetur quas, blanditiis, dignissimos minima. Harum inventore, fuga placeat deleniti animi nulla repellat ducimus, ipsa eius mollitia magni atque sint, nesciunt deserunt iure quaerat? Doloremque earum culpa aliquid maiores. Quis odit, eius exercitationem et in praesentium obcaecati ex doloribus, nostrum dolorum totam harum, reprehenderit autem nobis vitae molestias explicabo. Id cupiditate dolore soluta, reiciendis unde doloremque perspiciatis nemo sapiente laudantium ratione impedit voluptatibus delectus, eligendi corrupti exercitationem, adipisci eum! Quae aliquid hic tempora consequatur, debitis exercitationem ut natus! A, corrupti aut. Eos tempore veniam sunt? Aliquam praesentium, unde illum laboriosam, facere numquam consectetur sint ducimus in neque distinctio fugit accusantium nisi cumque suscipit, rem beatae aliquid quas dolorum doloribus esse error ut dolores? Laboriosam neque ducimus vero nisi quos expedita error distinctio itaque accusantium. Accusantium architecto ab maiores facilis est? Perferendis obcaecati aliquid eaque, vitae nam minus officia itaque commodi, exercitationem porro et ad odio, illum tenetur? Accusantium sequi vitae assumenda eius doloribus, ducimus, debitis enim perferendis hic tempora 
         </p>
  
        {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>


{/* ....................................POPUP content.................................................... */}

            <div className="modal-content">
              <h2>Hello I am POPUP</h2>
              <button className="close-modal" onClick={toggleModal}>
                CLOSE
              </button>
            </div>
          </div>
        )}







      </>
    );
  }

export default Modal


