import React from 'react';
import { X } from 'lucide-react';
import { Pokemon } from '../types';

interface PokemonModalProps {
  pokemon: Pokemon;
  onClose: () => void;
}

export function PokemonModal({ pokemon, onClose }: PokemonModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
        
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2">
            <img
              src={pokemon.sprites.other['official-artwork'].front_default}
              alt={pokemon.name}
              className="w-full h-auto"
            />
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold capitalize mb-4">{pokemon.name}</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Stats</h3>
                {pokemon.stats.map((stat) => (
                  <div key={stat.stat.name} className="mb-2">
                    <div className="flex justify-between mb-1">
                      <span className="capitalize">{stat.stat.name}</span>
                      <span>{stat.base_stat}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-500 rounded-full h-2"
                        style={{ width: `${(stat.base_stat / 255) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Details</h3>
                <p>Height: {pokemon.height / 10}m</p>
                <p>Weight: {pokemon.weight / 10}kg</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Abilities</h3>
                <div className="flex flex-wrap gap-2">
                  {pokemon.abilities.map((ability) => (
                    <span
                      key={ability.ability.name}
                      className="bg-gray-100 px-3 py-1 rounded-full text-sm capitalize"
                    >
                      {ability.ability.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}