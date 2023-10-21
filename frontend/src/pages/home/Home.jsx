import './home';
const state = {
  blogPosts: [
    {
      id: 1,
      title: 'First Blog Post',
      content: 'This is the content of the first blog post...',
    },
    {
      id: 2,
      title: 'Second Blog Post',
      content: 'This is the content of the second blog post...',
    },
    {
      id: 3,
      title: 'Third Blog Post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non feugiat libero, at fringilla purus.',
    },
    {
      id: 4,
      title: 'Fourth Blog Post',
      content: 'Cras convallis nunc nec tincidunt vestibulum. Fusce ut nunc vel arcu tincidunt blandit.',
    },
    {
      id: 5,
      title: 'Fifth Blog Post',
      content: 'Vivamus tincidunt, risus at luctus interdum, ex nunc suscipit arcu, non scelerisque purus nulla eu velit.',
    },
  ],
};

export default function home() {
  return (
    <div>home</div>
  )
}
