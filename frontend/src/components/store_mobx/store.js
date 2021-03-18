// import { LensTwoTone } from '@material-ui/icons';
import { nanoid } from 'nanoid';

export function createTodoStore() {
    return {
        userpage: {
            userimg: 'https://library.elementor.com/wp-content/uploads/2017/06/3-4.png',
            name: 'Elon Musk Uncle AAAA',
            email: 'elonmusk@tesla.com',
            contact: '9090909090',
            role: 'student',
            items: [
                {
                    name: 'Nikkon Cameron',
                    img:
                        'https://i.pcmag.com/imagery/reviews/05KU5NmyTcDrIOcF9n5F2vz-30..1569479607.jpg',
                    belongsto: 'Shutterbugs',
                    issueson: '30/02/2021',
                    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
                    deadline: '30/02/2022',
                    id: nanoid()
                },
                {
                    name: 'Nikkon Cameron',
                    img: 'https://cdn.mos.cms.futurecdn.net/vpfqJBE9TjGpsbjdNBurQX.jpg',
                    belongsto: 'Shutterbugs',
                    issueson: '30/02/2021',
                    description:
                        'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
                    deadline: '30/02/2022',
                    id: nanoid()
                },
                {
                    name: 'Nikkon Cameron',
                    img:
                        'https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2018/08/24/Photos/Technology/z7-ksgF--621x414@LiveMint.PNG',
                    belongsto: 'Shutterbugs',
                    issueson: '30/02/2021',
                    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem',
                    deadline: '30/02/2022',
                    id: nanoid()
                }
            ]
        },
        adminpage: {
            name: 'club IITJ',
            email: 'devclub@iitj.ac.in',
            manage: [
                {
                    name: 'a',
                    email: 'anc@iitj.ac.in',
                    role: 'assigner'
                },
                {
                    name: 'ab',
                    email: 'anc@iitj.ac.in',
                    role: 'assigner'
                },
                {
                    name: 'abc',
                    email: 'anc@iitj.ac.in',
                    role: 'assigner'
                },
                {
                    name: 'abcd',
                    email: 'anc@iitj.ac.in',
                    role: 'assigner'
                }
            ],
            pending_items: [
                {
                    itemId: 'id1',
                    itemName: 'aa',
                    requestingDate: 'dd-mm-yy',
                    dueDate: 'dd-mm-yy',
                    contact: '1234556788',
                    requestaName: 'qwe',
                    emailID: 'a@iitj.ac.in'
                },
                {
                    itemId: 'id2',
                    itemName: 'aabb',
                    requestingDate: 'dd-mm-yy',
                    dueDate: 'dd-mm-yy',
                    contact: '1234556788',
                    requestaName: 'qwe',
                    emailID: 'a@iitj.ac.in'
                }
            ],
            active_items: [
                {
                    itemId: 'id1',
                    itemName: 'aa',
                    requestingDate: 'dd-mm-yy',
                    dueDate: 'dd-mm-yy',
                    contact: '1234556788',
                    requestaName: 'qwe',
                    emailID: 'a@iitj.ac.in'
                }
            ],
            trans_items: [
                {
                    itemId: 'id1',
                    itemName: 'aa1',
                    requestingDate: 'dd-mm-yy',
                    dueDate: 'dd-mm-yy',
                    contact: '1234556788',
                    requestaName: 'qwe',
                    emailID: 'a@iitj.ac.in'
                },
                {
                    itemId: 'id2',
                    itemName: 'aabb2',
                    requestingDate: 'dd-mm-yy',
                    dueDate: 'dd-mm-yy',
                    contact: '1234556788',
                    requestaName: 'qwe',
                    emailID: 'a@iitj.ac.in'
                },
                {
                    itemId: 'id3',
                    itemName: 'aabbcc3',
                    requestingDate: 'dd-mm-yy',
                    dueDate: 'dd-mm-yy',
                    contact: '1234556788',
                    requestaName: 'qwe',
                    emailID: 'a@iitj.ac.in'
                }
            ]
        },
        homepage: {
            data: [
                {
                    id: '1',
                    name: 'Product_1',
                    description:
                        'A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences.'
                },
                {
                    id: '2',
                    name: 'Product_2',
                    description:
                        'A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences.'
                },
                {
                    id: '3',
                    name: 'Product 3',
                    description:
                        'A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences.'
                },
                {
                    id: '4',
                    name: 'Product 4',
                    description:
                        'A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences.'
                }
            ]
        },
        itempage: {
            data: {
                nameOfEquipment: 'NAME OF EQUIPMENT NNNN',
                equipmentId: 'd4f8j9',
                society: 'Frame-X',
                quantity: '5',
                Description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            }
        },
        searchpage: {
            items: [
                {
                    id: '1',
                    available: '4',
                    title: 'A red image R',
                    society: 'pclub',
                    url: 'https://via.placeholder.com/600/92c952',
                    desc:
                        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of'
                },
                {
                    id: '2',
                    available: '0',
                    title: 'A blue image',
                    society: 'pclub',
                    url: 'https://via.placeholder.com/600/771796',
                    desc:
                        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of'
                },
                {
                    id: '3',
                    available: '2',
                    title: 'A green image',
                    society: 'pclub',
                    url: 'https://via.placeholder.com/600/24f355',
                    desc:
                        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of'
                },
                {
                    id: 4,
                    available: 0,
                    title: 'A black image',
                    society: 'pclub',
                    url: 'https://via.placeholder.com/600/d32776',
                    desc:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur quis purus sit amet pellentesque. '
                }
            ]
        }
    };
}
