import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import 'jest-enzyme';

configure({ adapter: new Adapter() });

global.shallow = shallow;
