import Component from 'metal-component';
import Soy from 'metal-soy';
import Inputmask from "inputmask";

import templates from './date.soy';

/**
 * Date Component
 */
class Date extends Component {}

// Register component
Soy.register(Date, templates, 'render');

if (!window.DDMDate) {
	window.DDMDate = {

	};
}

window.DDMDate.render = Date;
window.DDMDate.Inputmask = Inputmask;

export default Date;