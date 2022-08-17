import styles from './Pessoa.module.css'

function Pessoa(props){

    return(
        <div className={styles.fraseConteiner}>
        <h2>Nome : {props.nome}</h2>
        <p>Idade: {props.idade}</p>
        <p>Altura: {props.altura}</p>
    </div>
    )
}

export default Pessoa