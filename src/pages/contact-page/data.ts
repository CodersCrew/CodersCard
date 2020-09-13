import { CardProps } from '../../components/DetailsCard/cardProps';
import { NavbarProps } from '../../components/Navbar';
import { TextFieldProps } from '../../components/TextField/TextField';
import avatar from '../../images/avatar.jpg';
import project from '../../images/download.jpeg';

export const projectData = {
  image: project,
  title: 'My Awesome Project',
  description:
    'In vel tellus ac quam elementum vulputate. Proin quis eros in elit luctus tempor. Aenean in hendrerit metus. Donec congue enim a dui efficitur, a pellentesque.',
  label: 'Mobile app',
  onClick: () => {
    window.alert('project clicked');
  },
};

export const userData: CardProps = {
  fullName: 'Jonathan Harwood',
  image: avatar,
  position: 'Full stack developer',
  socialMedia: [
    { name: 'facebook', link: 'https://www.facebook.com/' },
    { name: 'github', link: 'https://github.com/' },
    { name: 'twitter', link: 'https://twitter.com/' },
    { name: 'instagram', link: 'https://www.instagram.com/' },
  ],
  phone: '+48 601 345 132',
  email: 'jonathan.harwood@gmail.com',
  address: 'Wroclaw, Poland',
  isFreelancer: true,
  resumeLink: 'https://www.docdroid.net/WyjIuyO/fake-resume-pdf',
};

export const textFieldData: TextFieldProps = {
  variant: 'filled',
};

export const navbarData: NavbarProps = {
  fullName: 'Jonathan Harwood',
  position: 'Full stack developer',
  image:
    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=80&q=80',
  resumeLink: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
};
