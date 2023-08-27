import { Box } from '@/components';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center flex-col">
      <div className="h-full md:w-3/4 lg:w-3/5">
        <div className="h-96 w-full border-2 border-blue-500">
          <Box />
        </div>

        {/* main hero content */}
        <div className="mt-5">
          <h1 className="text-2xl">Nathapon Boonthongkaew</h1>
          <h2>Developer, Artist, Intrapreneur</h2>
        </div>

        <div className="mt-5">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            voluptate quae fugit inventore possimus accusantium ipsam, iste quod
            reprehenderit tenetur soluta tempora labore dolor suscipit
            laboriosam ut harum odit ullam ex reiciendis deleniti unde quas
            consectetur. Tenetur ipsum commodi, quam quod pariatur numquam iure
            dolor nesciunt amet? Itaque enim blanditiis autem ipsa cum dolorum
            culpa nihil exercitationem quis aliquid voluptates eaque mollitia
            cupiditate illum dolore deserunt eligendi officiis vitae placeat
            dicta dolores fuga asperiores, harum doloribus. Voluptas, at nostrum
            aliquam dolore, tempore numquam eius officiis quasi debitis
            molestiae aut. Reprehenderit sit quia accusantium, exercitationem
            ducimus veniam dignissimos unde architecto inventore?
          </p>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            voluptate quae fugit inventore possimus accusantium ipsam, iste quod
            reprehenderit tenetur soluta tempora labore dolor suscipit
            laboriosam ut harum odit ullam ex reiciendis deleniti unde quas
            consectetur. Tenetur ipsum commodi, quam quod pariatur numquam iure
            dolor nesciunt amet? Itaque enim blanditiis autem ipsa cum dolorum
            culpa nihil exercitationem quis aliquid voluptates eaque mollitia
            cupiditate illum dolore deserunt eligendi officiis vitae placeat
            dicta dolores fuga asperiores, harum doloribus. Voluptas, at nostrum
            aliquam dolore, tempore numquam eius officiis quasi debitis
            molestiae aut. Reprehenderit sit quia accusantium, exercitationem
            ducimus veniam dignissimos unde architecto inventore?
          </p>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            voluptate quae fugit inventore possimus accusantium ipsam, iste quod
            reprehenderit tenetur soluta tempora labore dolor suscipit
            laboriosam ut harum odit ullam ex reiciendis deleniti unde quas
            consectetur. Tenetur ipsum commodi, quam quod pariatur numquam iure
            dolor nesciunt amet? Itaque enim blanditiis autem ipsa cum dolorum
            culpa nihil exercitationem quis aliquid voluptates eaque mollitia
            cupiditate illum dolore deserunt eligendi officiis vitae placeat
            dicta dolores fuga asperiores, harum doloribus. Voluptas, at nostrum
            aliquam dolore, tempore numquam eius officiis quasi debitis
            molestiae aut. Reprehenderit sit quia accusantium, exercitationem
            ducimus veniam dignissimos unde architecto inventore?
          </p>
        </div>
      </div>
    </main>
  );
}
