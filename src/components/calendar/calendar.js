
import './calendar.css';
import "./index.css"
import * as React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop, lastDateOfMonth } from '@syncfusion/ej2-react-schedule';
import SampleBase from './sample-base'
import Menu from '../menu/menu';
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';



class Calendar extends SampleBase {

    constructor() {
        super(...arguments);
        this.state = {

            data: []
        }

    }

    onEventRendered(args) {
        switch (args.data.EventType) {
            case 'Requested':
                args.element.style.backgroundColor = '#F57F17';
                break;
            case 'Confirmed':
                args.element.style.backgroundColor = '#7fa900';
                break;
            case 'New':
                args.element.style.backgroundColor = '#8e24aa';
                break;
        }
    }

// getId(){
//     Axios.get('http://localhost:8080/api/calendarEvent/addEvents/getAll')
//     .then(response => {
//         // console.log(response.data.post, 'post')
//         this.setState({ data: response.data.post })

//     })
// }


    editorTemplate(props) {
        return ((props !== undefined) ? <table className="custom-event-editor" style={{ width: '100%', cellpadding: '5' }}><tbody>
            <tr><td className="e-textlabel">Summary</td><td style={{ colspan: '4' }}>
                <input id="Summary" className="e-field e-input" type="text" name="Subject" style={{ width: '100%' }} />
            </td></tr>
            <tr><td className="e-textlabel">Status</td><td style={{ colspan: '4' }}>
                <DropDownListComponent id="EventType" placeholder='Choose status' data-name='EventType' className="e-field" style={{ width: '100%' }} dataSource={['New', 'Requested', 'Confirmed']}>
                </DropDownListComponent>
            </td></tr>
            <tr><td className="e-textlabel">Email</td><td style={{ colspan: '4' }}>
                <input id="Email" className="e-field e-input" placeholder="Email" type="text" name="Email" style={{ width: '100%' }} />
            </td></tr>
            <tr><td className="e-textlabel">From</td><td style={{ colspan: '4' }}>
                <DateTimePickerComponent id="StartTime" format='dd/MM/yy hh:mm a' data-name="StartTime" value={new Date(props.startTime || props.StartTime)} className="e-field"></DateTimePickerComponent>
            </td></tr>
            <tr><td className="e-textlabel">To</td><td style={{ colspan: '4' }}>
                <DateTimePickerComponent id="EndTime" format='dd/MM/yy hh:mm a' data-name="EndTime" value={new Date(props.endTime || props.EndTime)} className="e-field"></DateTimePickerComponent>
            </td></tr>
            <tr><td className="e-textlabel">Reason</td><td style={{ colspan: '4' }}>
                <textarea id="Description" className="e-field e-input" name="Description" rows={3} cols={50} style={{ width: '100%', height: '60px !important', resize: 'vertical' }}></textarea>
            </td></tr></tbody></table> : <div></div>);
    }



    onActionBegin(args) {
        console.log(args, 'args')

        if (args.addedRecords && args.addedRecords.length > 0) {



            Axios.post('http://localhost:8080/api/calendarEvent/addEvents', args.addedRecords[0])
                .then(res =>{
                     console.log(res.data, 'data')
                     this.getId()
                    })
                .catch(err => {
                    console.log(err);

                })
            
        }

        if (args.changedRecords && args.changedRecords.length > 0) {
            console.log(args, 'args.changedRecords')
            Axios.put(`http://localhost:8080/api/calendarEvent/addEvents/update/${args.changedRecords[0]['_id']}`, args.changedRecords[0])
                .then(res => {
                    // console.log(res.config, 'change')
                  
                })
                .catch(err => {
                    // console.log(err) 
                })
        }


        if (args.deletedRecords && args.deletedRecords.length > 0) {
            Axios.delete(`http://localhost:8080/api/calendarEvent/addEvents/delete/${args.deletedRecords[0]['_id']}`)
                .then(res => {
                    // console.log(res.config,"delete")
                   
                })
            // .catch(err=>{console.log(err)})
        }




    }

    // componentDidMount() {
    //     this.getId()
    // }


    render() {


        console.log(this.state.data, 'this.state.data')

        return (
            <div className='schedule-control-section'>
                <Menu />
                <div className='col-md-11 control-section'>
                    <div className='control-wrapper'>
                        <ScheduleComponent width='100%' height='650px' selectedDate={new Date()} ref={t => this.scheduleObj = t} editorTemplate={this.editorTemplate.bind(this)} eventSettings={{ dataSource: this.state.data }} eventRendered={this.onEventRendered.bind(this)} actionBegin={this.onActionBegin.bind(this)}>
                            <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
                        </ScheduleComponent>

                    </div>
                </div>
            </div>);

    }

}

export default Calendar
