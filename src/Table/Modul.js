import React, {useState} from "react"
import {Button, Modal} from "react-bootstrap";
import {useFormik} from "formik";

export const ModWin = (props) => {
    const {addFighter} = props;
    const [show, setShow] = useState(false);
    const handleSave = () => setShow(false);
    const handleClose = () => {
        setShow(false);
    };
    const handleShow = () => setShow(true);
    const formik = useFormik( {
        initialValues: {
            id: '',
            name: '',
            age: '',
            category: '',
            win: '',
            lost: '',
            draw: '',
            total: ''
        },
        onSubmit : (values, {resetForm}) => {
            addFighter(values);
            resetForm({});
        }
    });

    return (<>
        <Button variant="success" onClick={handleShow}>
            Create new fighter
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Create new fighter</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={formik.handleSubmit}>
                    <div className="form-сol">
                        <div className="row-md-4 mb-3">
                            <label htmlFor="validationDefault01">ID: </label>
                            <input name='id' type="text" className="form-control"
                                   placeholder="ID"
                                   required onChange={formik.handleChange} value={formik.values.id}/>
                        </div>
                        <div className="row-md-4 mb-3">
                            <label htmlFor="validationDefault02">Full name:</label>
                            <input name='name' type="text" className="form-control"
                                   placeholder="Full name"
                                   required onChange={formik.handleChange} value={formik.values.name}/>
                        </div>
                        <div className="row-md-4 mb-3">
                            <label htmlFor="validationDefault02">Age:</label>
                            <input name='age' type="text" className="form-control"
                                   placeholder="age"
                                   required onChange={formik.handleChange} value={formik.values.age}/>
                        </div>
                        <div className="row-md-4 mb-3">
                            <label htmlFor="validationDefault02">Category:</label>
                            <input name='category' type="text" className="form-control"
                                   placeholder="category"
                                   required onChange={formik.handleChange} value={formik.values.category}/>
                        </div>
                        <div className="row-md-4 mb-3">
                            <label htmlFor="validationDefault02">Win</label>
                            <input name='win' type="text" className="form-control"
                                   placeholder="win"
                                   required onChange={formik.handleChange} value={formik.values.win}/>
                        </div>
                        <div className="row-md-4 mb-3">
                            <label htmlFor="validationDefault02">Lost:</label>
                            <input name='lost' type="text" className="form-control"
                                   placeholder="lost"
                                   required onChange={formik.handleChange} value={formik.values.lost}/>
                        </div>
                        <div className="row-md-4 mb-3">
                            <label htmlFor="validationDefault02">Draw: </label>
                            <input name='draw' type="text" className="form-control"
                                   placeholder="draw"
                                   required onChange={formik.handleChange} value={formik.values.draw}/>
                        </div>
                        <div className="row-md-4 mb-3">
                            <label htmlFor="validationDefault02">Total fights: </label>
                            <input name='total' type="text" className="form-control"
                                   placeholder="Total fights"
                                   required onChange={formik.handleChange} value={formik.values.total}/>
                        </div>
                    </div>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button type='submit' variant="primary" onClick={handleSave}>
                        Save
                    </Button>
                </form>
               </Modal.Body>
        </Modal>
    </>)
};


