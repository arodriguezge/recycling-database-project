import React, {Component} from 'react'

// corresponding style file: _editTicketForm.scss

class EditTicket extends Component {
    name = React.createRef()
    description = React.createRef()
    bin = React.createRef()

    handleSubmit = event => {
        event.preventDefault();
        const name = this.name.current.value
        const description = this.description.current.value
        const bin = this.bin.current.value
        const id = this.props.item._id
        this.props.editItem(id, name, description, bin)
        event.currentTarget.reset()
        this.props.toggleHidden()
    }

    render() {
        return (
                <div className="popup-container4">
                    <div className="form-box4">
                        <h4>Edit item</h4>
                        <form onSubmit={this.handleSubmit}>
                            <p className="heading4-1">Waste item name:</p>
                            <div>
                                <input type="text" className="form-control" defaultValue={this.props.item.name} ref={this.name}/>
                            </div>
                            <br/>
                            <div>
                                <p className="heading4-2">Description:</p><br/>
                                <textarea type="text" className="form-control" id="exampleFormControlTextarea1"
                                          defaultValue={this.props.item.description} rows="5"
                                          placeholder="Type item description here..." ref={this.description}/><br/>
                            </div>
                            <div>
                                <p className="heading4-2">Waste bin:</p><br/>
                                <select className="form-control select4" defaultValue={this.props.item.bin} ref={this.bin}>
                                    <option value="blue">blue bin (paper, cardboard)</option>
                                    <option value="green">green bin (colored glass)</option>
                                    <option value="white">white bin (white glass)</option>
                                    <option value="yellow">yellow/orange bin (plastic, metal, Green Dot)</option>
                                    <option value="brown">brown bin (biodegradable goods)</option>
                                    <option value="grey">grey/black bin (everything else)</option>
                                    <option value="none">none of the bins (other waste disposal)</option>
                                </select>
                            </div>
                            <div>
                                <button className="btn btn-secondary button4" type="submit">Accept</button>
                                <button className="btn btn-secondary button4" onClick={this.props.toggleHidden}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
        )
    }
}

export default EditTicket