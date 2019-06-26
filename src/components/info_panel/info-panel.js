import './info-panel.scss'
import template from './info-panel.html'
import { Component } from '../component'


export class InfoPanel extends Component {

    constructor (placeholderId, props) {
        super(placeholderId, props, template);

        // Toggle info panel on title click
        this.refs.title.addEventListener('click', () => this.refs.container.classList.toggle('info-active'))
    }
}