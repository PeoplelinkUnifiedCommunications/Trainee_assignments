import "./footer.css"

function Footer(){
    return(
        <div className="flexRow footer">
         <div className="flexCol foot">
           <span>@Copyright</span>
           <span>this page belongs to shantanu biswas</span>
           <span>peoplelink</span>
         </div>
         <div className="flexCol foot">
         <span>Contact :</span>
         <span>Shantanu Biswas</span>
         <span>biswas@peoplelinkvc.com</span>
         <span>9603139421</span>
         </div>

        </div>
    );
}
export default Footer;