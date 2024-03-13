# Techispot

Techispot is a community-driven platform for engineers, where they can connect, share insights, and stay updated on the latest technologies. Whether you're a seasoned professional or a curious student, Techispot aims to be your go-to hub for tech-related content.

## Features
- **Mentor Helps**: Connect to the people who are working in the industry and can allocate some time to help you with projects and concepts.

- **Communities**: Several communities to assist learners through their posts and chats.

- **Thoughts and Suggestions**: Engage in discussions with fellow engineers. Share your thoughts, ask questions, and provide valuable feedback.

- **Creating Posts**: Share your thoughts by creating a post on which users can like, comment, and share.

- **Tech News**: Stay informed about the ever-evolving tech landscape. Get updates on industry trends, product launches, and breakthroughs.

- **Memes**: Because who doesn't love a good tech meme? Lighten up your day with relatable humor.

- **Projects**: Access curated tech-related projects and resources. Learn and grow together.

- **Secured authentication**: Sign in for verifying users and allowing them to use several features like comments, likes, etc.
## post data
``` postdata = [
    {
        userProfile: {
            userName: 'TechiSpot',
            userImage: 'https://i.pinimg.com/474x/bd/26/b7/bd26b704fca0c5e3fe68f10322bf65c0.jpg',
            alt: 'profileimage',
            followBtn: true  
        },
        userPost: {
            discription: `Hello, This is a post. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim quam omnis sunt explicabo temporibus provident. Recusandae, dolorem nisi. Sunt necessitatibus qui dolore, consequatur doloribus nam? Perferendis commodi sunt minima aliquam?`,
            postImage: 'https://media.licdn.com/dms/image/D4D12AQG56UPUtPJj0w/article-cover_image-shrink_600_2000/0/1669373321238?e=2147483647&v=beta&t=uUMorY6yjVASSX_Iy-VNu8eXkAMfkmY97PWk7zDKR0w',
            alt: 'userPost'
        },
        comments: [
            {
                user: {
                    userName: 'Commenter1',
                    userImage: 'https://example.com/user1.jpg',
                    alt: 'commenter1image',
                    followBtn: true  
                },
                commentText: 'Great post! Keep it up!',
                timestamp: '2024-03-12T12:34:56',
                likes: 5
            },
            {
                user: {
                    userName: 'Commenter2',
                    userImage: 'https://example.com/user2.jpg',
                    alt: 'commenter2image',
                    followBtn: true  
                },
                commentText: 'I love the content. Lorem ipsum!',
                timestamp: '2024-03-12T13:45:30',
                likes: 8
            }
        ],
        timestamp: '2024-03-12T10:15:00',
        likes: 15,
        tags: ['technology', 'coding'],
        location: 'india',
        likedBy: [
            {
                userName: 'User1',
                userImage: 'https://example.com/user1.jpg',
                alt: 'user1image',
                followBtn: true  
            },
            {
                userName: 'User2',
                userImage: 'https://example.com/user2.jpg',
                alt: 'user2image',
                followBtn: true  
            }
        ]
    },
```
## Installation

Follow these steps to run Techispot on your local machine:

1. Clone the repository:
   ```
   git clone https://github.com/GauravPandey123webdeveloper/TechiSpot.git
   ```

2. Navigate to the project directory:
   ```
   cd TechiSpot
   ```

3. Move into the frontend folder:
   ```
   cd frontend
   ```

4. Install dependencies:
   ```
   npm install
   ```

5. Start the development server:
   ```
   npm start
   ```

## Contributing

We welcome contributions from the community! If you have ideas, bug fixes, or new features to propose, feel free to submit a pull request.

