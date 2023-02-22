import { Modal, Image, Button } from "react-bootstrap"
import useBebidas from "../hooks/useBebidas"

const ModalBebida = () => {

    const { modal, handleModalClick, receta, cargando } = useBebidas()

    const mostrarIngredientes = () => {
        let ingredientes = []

        for(let i = 1; i < 16; i++ ) {
            if ( receta[`strIngredient${i}`] !== null) {
                ingredientes.push(
                    <li className="list" key={i}>{receta[`strIngredient${i}`]} {receta[`strMeasure${i}`]}</li>
                )
            }
        }
        return ingredientes
    }

 
  return (
    !cargando && (
        <Modal show={modal} onHide={handleModalClick} animation={true} centered>
            <Image 
                src={receta.strDrinkThumb}
                alt={`Imagen receta ${receta.strDrink}`}
                />
            <Modal.Header>
                <Modal.Title>
                    {receta.strDrink}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="p-2">
                        <h4 className="recipe">Instructions</h4>
                        <div className="list">
                            {receta.strInstructions}
                        </div>
                        <h4 className="recipe"> Ingredients and Quantities</h4>
                            {mostrarIngredientes()}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={handleModalClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                    </svg> {''}
                    Close 
                </Button>
            </Modal.Footer>
        </Modal>
    )
  )

}

export default ModalBebida