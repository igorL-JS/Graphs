import React, {useState} from "react"
import {Button, Modal} from "react-bootstrap";
import {useFormik} from "formik";

export const ModWinEdit = (props) => {
    const {editFighter} = props;
    const {id, name, age, category, win, lost, draw, total} = props.currentFighter;
    const [show, setShow] = useState(true);

    const handleClose = () => {
        setShow(false);
        props.setIndexFighter(null);
    };

    const handleSave = () => {
        setShow(false);
    };

    const formik = useFormik( {
        initialValues: {
            id: id,
            name: name,
            age: age,
            category: category,
            win: win,
            lost: lost,
            draw: draw,
            total: total
        },
        onSubmit: values => {editFighter(values,id)},
    });

    return (<>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit fighter</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={formik.handleSubmit}>
                    <div className="form-col">
                        <div className="row-md-4 mb-3">
                            <label htmlFor="validationDefault01">ID: </label>
                            <input disabled name='id' type="text" className="form-control" id="validationDefault01"
                                   placeholder="ID"
                                   required onChange={formik.handleChange} value={formik.values.id}/>
                        </div>
                        <div className="row-md-4 mb-3">
                            <label htmlFor="validationDefault02">Full name:</label>
                            <input name='name' type="text" className="form-control" id="validationDefault02"
                                   placeholder="Full name"
                                   required onChange={formik.handleChange} value={formik.values.name}/>
                        </div>
                        <div className="row-md-4 mb-3">
                            <label htmlFor="validationDefault02">Age:</label>
                            <input name='age' type="text" className="form-control" id="validationDefault02"
                                   placeholder="age"
                                   required onChange={formik.handleChange} value={formik.values.age}/>
                        </div>
                        <div className="row-md-4 mb-3">
                            <label htmlFor="validationDefault02">Category:</label>
                            <input name='category' type="text" className="form-control" id="validationDefault02"
                                   placeholder="category"
                                   required onChange={formik.handleChange} value={formik.values.category}/>
                        </div>
                        <div className="row-md-4 mb-3">
                            <label htmlFor="validationDefault02">Win</label>
                            <input name='win' type="text" className="form-control" id="validationDefault02"
                                   placeholder="win"
                                   required onChange={formik.handleChange} value={formik.values.win}/>
                        </div>
                        <div className="row-md-4 mb-3">
                            <label htmlFor="validationDefault02">Lost:</label>
                            <input name='lost' type="text" className="form-control" id="validationDefault02"
                                   placeholder="lost"
                                   required onChange={formik.handleChange} value={formik.values.lost}/>
                        </div>
                        <div className="row-md-4 mb-3">
                            <label htmlFor="validationDefault02">Draw: </label>
                            <input name='draw' type="text" className="form-control" id="validationDefault02"
                                   placeholder="draw"
                                   required onChange={formik.handleChange} value={formik.values.draw}/>
                        </div>
                        <div className="row-md-4 mb-3">
                            <label htmlFor="validationDefault02">Total fights: </label>
                            <input name='total' type="text" className="form-control" id="validationDefault02"
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


