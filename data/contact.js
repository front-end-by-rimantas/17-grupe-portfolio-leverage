const selector = '#contact';

const firstStepData = {
    title: 'Let\'s talk?',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue lectus augue. Sed pharetra ornare vulputate.',
    firstStepName: 'Personal details',
    secondStepName: 'Company budget',
    thirdStepName: 'Service setup',
    videoImagePath: './img/about-2.jpg',
    videoPosterPath: 'https://i.ytimg.com/vi_webp/7e90gBu4pas/maxresdefault.webp',
    videoPath: './video/contactsVideo.mp4',
    input1: 'Name',
    input2: 'Email',
    input3: 'Phone'
}
const secondStepData = {
    title: 'Almost There',
    description: 'Suspendisse potenti. Nulla bibendum at urna a imperdiet. Cras rhoncus rhoncus varius. Nunc sollicitudin vestibulum.',
    firstStepName: 'Personal details',
    secondStepName: 'Company budget',
    thirdStepName: 'Service setup',
    imagePath: './img/about-3.jpg',
    input1: 'Company',
    input2: 'Manager',
    input3: 'What\'s your budget range?'
}
const thirdStepData = {
    title: 'Checkout Now',
    description: 'Integer non nunc volutpat, faucibus ante eu, faucibus elit. Praesent ultricies, velit in tempus lobortis, orci massa posuere.',
    firstStepName: 'Personal details',
    secondStepName: 'Company budget',
    thirdStepName: 'Service setup',
    imagePath: './img/about-4.jpg',
    inputMessage: 'Message',
}
const sendMessage = {
    successMessage: 'Your message was sent successful. Thanks.',
    imagePath: './img/about-leverage.jpg'
}

export default { selector, firstStepData, secondStepData, thirdStepData, sendMessage };