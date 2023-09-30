import { users } from "./users";

export const posts = [
    {
        user: users[2].name,
        caption:
            'Can\'t believe my team got banned for fixing matches. I am so sad. 😭',
        profile_picture: users[2].imageUrl,
        imageUrl: "https://images.thequint.com/thequint/2015-07/d03612e4-e1a7-4d06-958a-46ddfe53f186/Suspended.png",
        likes: 68310,
        comments: [
            {
                user: 'sureshraina3',
                comment: 'Bhai balcony dilwa do! Warna IPL chodke chala jaunga',
            },
            {
                user: users[0].name,
                comment: 'Omg! Is it true?',
            }
        ],
    },
    {
        user: users[4].name,
        caption: 'This is a very good boi. 🐕',
        profile_picture: users[4].imageUrl,
        imageUrl:
            'https://images.unsplash.com/photo-1575535468632-345892291673?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        likes: 894,
        comments: [
            {
                user: users[5].name,
                comment: 'Awww! 🐶. What a cutipie. Wonder when can I play with it',
            }
        ],
    },
    {
        user: users[3].name,
        caption: 'Adventure 🏔',
        profile_picture: users[3].imageUrl,
        imageUrl:
            'https://images.unsplash.com/photo-1573331519317-30b24326bb9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        likes: 722,
        comments: [
            {
                user: 'sid.darknight',
                comment: 'Where is this?',
            },
            {
                user: users[3].name,
                comment: 'Himachal Pradesh, India',
            }
        ],
    }
]