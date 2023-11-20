import React from 'react';

const ForfaitaireGrid = () => {
  const forfaitaireData = [];
  let baseTarif = 15;
  const tarifIncrement = 10;
  const distanceIncrement = 20;
  let currentDistance = 20;

  while (currentDistance <= 100) {
    forfaitaireData.push({ distance: currentDistance, tarif: baseTarif });
    baseTarif += tarifIncrement;
    currentDistance += distanceIncrement;
  }

  return (
    <div className='mt-10 w-full'>
      <table className='mx-auto table-auto'>
        <thead>
          <tr>
            <th className='border px-4 py-2'>Distance (en km)</th>
            <th className='border px-4 py-2'>Tarif (en euros)</th>
          </tr>
        </thead>
        <tbody>
          {forfaitaireData.map((item, index) => (
            <tr key={index}>
              <td className='border px-4 py-2'>{item.distance}</td>
              <td className='border px-4 py-2'>{item.tarif}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ForfaitaireGrid;
