import styles from './Product.module.css'

const Product = (props) => {

    return (
        <div className={styles.product} onClick={props.click}>
            <p>product name : {props.product.name} course</p>
            <p>product price : {props.product.price}</p>
            <span className={styles.value}>{props.product.quantity}</span>
            <input type='text' className={styles.button} onChange={props.onChange} />
            <button className={`${styles.button} ${styles.inc}`} onClick={props.onIncrement}>+</button>
            <button className={`${styles.button} ${styles.inc}`} onClick={props.onDecrement}>-</button>

            <button className={styles.button} onClick={props.onDelete} >delete</button>
        </div>

    );
}

export default Product;