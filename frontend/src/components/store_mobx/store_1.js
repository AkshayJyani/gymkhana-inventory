import { nanoid } from 'nanoid';

export function createTodoStore() {
    return {
        store: {
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
                name: 'club',
                email: 'club@iitj.ac.in',
                manage: [
                    {
                        name: 'abc',
                        email: 'anc@iitj.ac.in',
                        role: 'assigner'
                    },
                    {
                        name: 'ac',
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
                    }
                ],
                items: [
                    {
                        itemId: 'id1',
                        itemName: 'a',
                        requestingDate: 'dd-mm-yy',
                        dueDate: 'dd-mm-yy',
                        contact: '1234556788',
                        requestaName: 'qwe',
                        emailID: 'a@iitj.ac.in'
                    },
                    {
                        itemId: 'id2',
                        itemName: 'abc',
                        requestingDate: 'dd-mm-yy',
                        dueDate: 'dd-mm-yy',
                        contact: '1234556788',
                        requestaName: 'qwe',
                        emailID: 'a@iitj.ac.in'
                    },
                    {
                        itemId: 'id3',
                        itemName: 'abc',
                        requestingDate: 'dd-mm-yy',
                        dueDate: 'dd-mm-yy',
                        contact: '1234556788',
                        requestaName: 'qwe',
                        emailID: 'a@iitj.ac.in'
                    }
                ]
            }
        }
    };
}