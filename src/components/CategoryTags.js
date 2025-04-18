import React from 'react';

const tags = ['Perfumaria', 'Corpo e banho', 'Hidratante', 'Desodorante', 'Cabelos', 'Maquiagem', 'Rosto', 'Casa', 'Infantil', 'Shampoo', 'Sabonete'];

const CategoryTags = () => {
  return (
    <section>
      <h2>Categorias</h2>
      <div className="tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
    </section>
  );
};

export default CategoryTags;
