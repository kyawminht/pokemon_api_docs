import React from "react";

const Docs = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <nav className="flex-shrink-0 w-64 bg-white border-r overflow-y-auto hidden md:block fixed md:w-64">
        <div className="p-4">
          <h1 className="text-2xl font-semibold text-start">Documentation</h1>
          <ul className="mt-4 space-y-2 text-start">
            <li>
              <a
                href="#getting-started"
                className="text-blue-500 text-xl font-semibold "
              >
                Getting Started
              </a>
            </li>
            <li>
              <a href="#auth" className="text-blue-500 text-xl font-semibold ">
             Authentication
              </a>
            </li>
            <li>
              <a href="#get" className="text-blue-500 text-xl font-semibold ">
             Get all Pokemons
              </a>
            </li>

            <li>
              <a href="#filter" className="text-blue-500 text-xl font-semibold ">
             Fiters
              </a>
            </li>

            <li>
              <a href="#show" className="text-blue-500 text-xl font-semibold ">
              Get Single Pokemon
              </a>
            </li>

            <li>
              <a href="#add" className="text-blue-500 text-xl font-semibold ">
              Add New Pokemon
              </a>
            </li>

            <li>
              <a href="#update" className="text-blue-500 text-xl font-semibold ">
             Update Pokemon
              </a>
            </li>

            <li>
              <a href="#delete" className="text-blue-500 text-xl font-semibold ">
              Delete a Pokemon
              </a>
            </li>

          </ul>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-1 overflow-x-hidden overflow-y-auto md:ml-64 md:mx-auto my-5">
        <div className="p-4 max-w-screen-md mx-auto">
          {/* Documentation content */}
          <section id="getting-started" className=" md:w-[500px] w-full mx-auto mt-[300px] text-start">
            <h1 class="text-3xl font-semibold mb-4 ">How to Use Pokemon API</h1>

            <p class="mb-4">
              <span class="font-semibold">Pokemon API</span> is a versatile API
              that provides information about various Pokemon. It offers
              endpoints to manage users, login/logout, and perform operations
              related to Pokemon such as listing, creating, updating, and
              deleting. Below is a guide on how to use the Pokemon API in your
              project.
            </p>
          </section>

          <section id="auth" className=" md:w-[500px] w-full mx-auto mt-[200px] text-start">
            <div class="max-w-2xl mx-auto">
              <div class="bg-white p-6 rounded-md mb-8">
                <h1 class="text-2xl font-semibold mb-4">
                  Register | Login | Logout
                </h1>
                <p>
                  This is used in token-based authentication, so firstly, you
                  need to undergo authentication processes.
                </p>
                <div className=" bg-rose-200 p-5 rounded-md w-20  mb-3">
                  <h4 className=" font-bold">POST</h4>
                </div>
                <div className=" bg-green-200 p-5 rounded-md">
                  <h4 className=" ">
                    Header : Authorization: Bearer Token -- your token{" "}
                  </h4>
                </div>
                <div class="bg-gray-100 p-4 mt-4 rounded-md break-all">
                  <code class="text-sm font-mono">
                    http://127.0.0.1:8000/api/register
                  </code>
                  <br />
                  <code class="text-sm font-mono">
                    http://127.0.0.1:8000/api/login
                  </code>
                  <br />
                  <code class="text-sm font-mono">
                    http://127.0.0.1:8000/api/logout
                  </code>
                </div>
              </div>
            </div>
          </section>

          <section id="get" className=" md:w-[500px] w-full mx-auto mt-[200px] text-start">
            <div class="max-w-2xl mx-auto">
              <div class="bg-white p-6 rounded-md mb-8">
                <h1 class="text-2xl font-semibold mb-4">Get all Pokemons</h1>
                <p>You can get all Pokemons by accessing the following URL:</p>
                <div className=" bg-rose-200 p-5 rounded-md w-20 mb-3">
                  <h4 className=" font-bold">GET</h4>
                </div>
                <div className=" bg-green-200 p-5 rounded-md">
                  <h4 className=" ">
                    Header : Authorization: Bearer Token -- your token{" "}
                  </h4>
                </div>
                <div class="bg-gray-100 p-4 mt-4 rounded-md break-all">
                  <code class="text-sm font-mono">
                    http://127.0.0.1:8000/api/pokemons
                  </code>
                </div>
              </div>
            </div>
          </section>

          <section className=" md:w-[500px] w-full mx-auto text-start">
            <div class="max-w-2xl mx-auto">
              <div class="bg-white p-6 rounded-md mb-8">
                <h1 class="text-2xl font-semibold mb-4">Example output</h1>

                <div class="bg-gray-100 p-4 mt-4 rounded-md break-all">
                  <code class="text-sm font-mono">
                    "id": 1, <br />
                    "name": "sint", <br />
                    "type": "Grass",
                    <br />
                    "level": 12,
                    <br />
                    "image_url":
                    "https://via.placeholder.com/640x480.png/007744?text=iure",
                    <br />
                    "price": "46.84",
                    <br />
                    "rarity": "Rare",
                    <br />
                    "quantity": 4,
                    <br />
                    "status": 0,
                    <br />
                    "user_id": 1,
                    <br />
                    "created_at": "2024-01-09T10:23:12.000000Z",
                    <br />
                    "updated_at": "2024-01-09T10:23:12.000000Z"
                  </code>
                </div>
              </div>
            </div>
          </section>

          <section  id="filter" className=" md:w-[500px] w-full mx-auto mt-[200px] text-start">
            <div class="max-w-2xl mx-auto">
              <div class="bg-white p-6 rounded-md mb-8">
                <h1 class="text-2xl font-semibold mb-4">
                  Get a list of Pokemon with optional filters.
                </h1>
                <p>
                  You can get Pokemons by filtering name, type, level, rarity.
                </p>
                <div className=" bg-rose-200 p-5 rounded-md w-20 mb-3">
                  <h4 className=" font-bold">GET</h4>
                </div>
                <div className=" bg-green-200 p-5 rounded-md">
                  <h4 className=" ">
                    Header : Authorization: Bearer Token -- your token{" "}
                  </h4>
                </div>
                <div class="bg-gray-100 p-4 mt-4 rounded-md break-all">
                  <code class="text-sm font-mono">
                    http://127.0.0.1:8000/api/pokemons
                  </code>
                </div>
              </div>
            </div>
          </section>

          <section className="md:w-[500px] w-full mx-auto text-start">
            <div class="max-w-2xl mx-auto">
              <div class="bg-white p-6 rounded-md mb-8">
                <h1 class="text-2xl font-semibold mb-4">Filter by name</h1>

                <div class="bg-gray-100 p-4 mt-4 rounded-md break-all">
                  <code class="text-sm font-mono">
                    "id": 22,
                    <br />
                    "name": "kyaw",
                    <br />
                    "type": "Grass",
                    <br />
                    "level": 33,
                    <br />
                    "image_url": "uploads/pokemon/1704935977.jpg",
                    <br />
                    "price": "33.00",
                    <br />
                    "rarity": "common",
                    <br />
                    "quantity": 23,
                    <br />
                    "status": 0,
                    <br />
                    "user_id": 1,
                    <br />
                    "created_at": "2024-01-11T01:19:37.000000Z",
                    <br />
                    "updated_at": "2024-01-11T01:19:37.000000Z"
                  </code>
                </div>
              </div>
            </div>
          </section>

           {/* Show Section */}
      <section id="show" className="md:w-[500px] w-full mx-auto mt-[200px] text-start">
        <div className="bg-white p-6 rounded-md mb-8">
          <h1 className="text-2xl font-semibold mb-4">
            Get a list of a single Pokemon by ID.
          </h1>
          <p>
            You can get details of a specific Pokemon by its ID.
          </p>
          <div className="bg-rose-200 p-5 rounded-md w-20 mb-3">
            <h4 className="font-bold">GET</h4>
          </div>
          <div className="bg-green-200 p-5 rounded-md">
            <h4 className=" ">
              Header : Authorization: Bearer Token -- your token
            </h4>
          </div>
          <div className="bg-gray-100 p-4 mt-4 rounded-md break-all">
            <code className="text-sm font-mono">
              http://127.0.0.1:8000/api/pokemons/{'{id}'}
            </code>
          </div>
        </div>
      </section>

      {/* Create Section */}
      <section id="add" className="md:w-[500px] w-full mx-auto md:ml-auto text-start">
        <div className="bg-white p-6 rounded-md mb-8">
          <h1 className="text-2xl font-semibold mb-4">Create a new Pokemon.</h1>
          <p>
            You can create a new Pokemon using the following endpoint.
          </p>
          <div className="bg-rose-200 p-5 rounded-md w-20 mb-3">
            <h4 className="font-bold">POST</h4>
          </div>
          <div className="bg-green-200 p-5 rounded-md">
            <h4 className=" ">
              Header : Authorization: Bearer Token -- your token
            </h4>
          </div>
          <div className="bg-gray-100 p-4 mt-4 rounded-md break-all">
            <code className="text-sm font-mono">
              http://127.0.0.1:8000/api/pokemons
            </code>
          </div>
        </div>
      </section>

      {/* Update Section */}
      <section id="update" className="md:w-[500px] w-full mx-auto text-start">
        <div className="bg-white p-6 rounded-md mb-8">
          <h1 className="text-2xl font-semibold mb-4">Update details of a specific Pokemon by ID.</h1>
          <p>
            You can update details of a specific Pokemon using the following endpoint.
          </p>
          <div className="bg-rose-200 p-5 rounded-md w-20 mb-3">
            <h4 className="font-bold">PUT</h4>
          </div>
          <div className="bg-green-200 p-5 rounded-md">
            <h4 className=" ">
              Header : Authorization: Bearer Token -- your token
            </h4>
          </div>
          <div className="bg-gray-100 p-4 mt-4 rounded-md break-all">
            <code className="text-sm font-mono">
              http://127.0.0.1:8000/api/pokemons/{'{id}'}
            </code>
          </div>
        </div>
      </section>

      {/* Delete Section */}
      <section id="delete" className="md:w-[500px] w-full mx-auto text-start">
        <div className="bg-white p-6 rounded-md mb-8">
          <h1 className="text-2xl font-semibold mb-4">Delete a specific Pokemon by ID.</h1>
          <p>
            You can delete a specific Pokemon using the following endpoint.
          </p>
          <div className="bg-rose-200 p-5 rounded-md w-24 mb-3">
            <h4 className="font-bold">DELETE</h4>
          </div>
          <div className="bg-green-200 p-5 rounded-md">
            <h4 className=" ">
              Header : Authorization: Bearer Token -- your token
            </h4>
          </div>
          <div className="bg-gray-100 p-4 mt-4 rounded-md break-all">
            <code className="text-sm font-mono">
              http://127.0.0.1:8000/api/pokemons/{'{id}'}
            </code>
          </div>
        </div>
      </section>
        </div>
      </main>
    </div>
  );
};

export default Docs;
