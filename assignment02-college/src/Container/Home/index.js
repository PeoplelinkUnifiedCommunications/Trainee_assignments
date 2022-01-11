import "./index.css"
function Home() {

    return (
        <div className="mainContainer">
            <div className="home">
                <div className="banner">
                    <img src="https://wallpaperaccess.com/full/6592911.jpg" alt="university" width = "100%" height = "100%"/>
            
                </div>
                <div className="vision">
                    <h3>VISION</h3>
                    <p>Commitment to excellence in the field of education taking the students to their highest academic potential.
                        Dedication to the cause of inculcating self-esteem and tolerance in the students, respect for others, harmony and tolerance by providing them an atmosphere of caring, discipline and understanding by our committed staff to make their contribution to society and above all, nation building.
                        Liaison with institutions of higher learning and research in India and abroad promoting advanced studies to make ours as a leading institution of learning in the world.</p>
                </div>
                <div className="goals">
                    <div className="g1 gStyle">
                        <p>Creating an environment for higher teaching and learning process with state-of-art infrastructure that expands its horizons and knowledge which cultivate principled thought and wisdom through Sharing and Upgradation of Knowledge through Interaction (SUKTI) </p>
                    </div>
                    <div className="g2 gStyle">
                        <p>Molding the character of students towards morally upright and decent behavior needed for a good citizen as a human being with commitment to ethics and social justice through Collective Learning and Upgrading Sessions (CLUS)</p>                        
                    </div>
                    <div className="g3 gStyle"> 
                        <p>Transforming students as able, competent and humane citizens making them address effectively the demands of the new millennium through Upgradation of Knowledge through Interaction (UKTI)</p>                       
                    </div>

                </div>

            </div>

        </div>
    );

}
export default Home;