import styles from "../sections/Features/Features.module.scss";

export default function Card(props) {
    return (
        <>
            <div className="col-lg-4 mt-5 ">
                <div className={styles.Card} /*style={{width:"18rem"}}*/>
                     
                    <img src={props.imgSrc} className={styles.imgast +" card-img-top"} alt="..."/>
                        <div className="card-body text-center ">
                           {/* <div className={styles.icon + "icon text-center"}>{props.icon}</div>  icon eklemek için aklında olsun */}
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text"> {props.text}</p>
                            <a href="#" className="btn btn-primary">{props.button}</a>
                        </div>
                       
                </div>
            </div>
          

        </>
    )
}
