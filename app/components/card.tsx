import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Card = () => {
  return (
    <div className="flex justify-center m-12 space-x-6 flex-wrap">
      <div className="border border-gray-300 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <Image
          src="/images/car1.png"
          alt="Toyota Corolla"
          className="rounded-t-lg"
          width={250}
          height={150}
          objectFit="cover"
        />
        <div className="text-center mt-4">
          <Link href="/car1">
            <p className="text-blue-600 font-semibold hover:underline">Toyota Corolla</p>
          </Link>
          <p className="text-green-600 font-medium">PKR 59.5 - 75.5 lacs</p>
          <p className="text-gray-600">621 Reviews</p>
        </div>
      </div>

      <div className="border border-gray-300 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <Image
          src="/images/car2.png"
          alt="Suzuki Alto"
          className="rounded-t-lg"
          width={250}
          height={150}
          objectFit="cover"
        />
        <div className="text-center mt-4">
          <Link href="/car2">
            <p className="text-blue-600 font-semibold hover:underline">Suzuki Alto</p>
          </Link>
          <p className="text-green-600 font-medium">PKR 23.5 - 25.5 lacs</p>
          <p className="text-gray-600">621 Reviews</p>
        </div>
      </div>

      <div className="border border-gray-300 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <Image
          src="/images/car3.jpg"
          alt="Honda City"
          className="rounded-t-lg"
          width={250}
          height={150}
          objectFit="cover"
        />
        <div className="text-center mt-4">
          <Link href="/car3">
            <p className="text-blue-600 font-semibold hover:underline">Honda City</p>
          </Link>
          <p className="text-green-600 font-medium">PKR 46.5 - 58.5 lacs</p>
          <p className="text-gray-600">621 Reviews</p>
        </div>
      </div>

      <div className="border border-gray-300 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <Image
          src="/images/car4.jpg"
          alt="Honda Civic"
          className="rounded-t-lg"
          width={250}
          height={150}
          objectFit="cover"
        />
        <div className="text-center mt-4">
          <Link href="/car4">
            <p className="text-blue-600 font-semibold hover:underline">Honda Civic</p>
          </Link>
          <p className="text-green-600 font-medium">PKR 86.5 - 99.5 lacs</p>
          <p className="text-gray-600">621 Reviews</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
