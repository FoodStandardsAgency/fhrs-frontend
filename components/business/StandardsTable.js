import textBlock from '@components/components/article/TextBlock/textBlock.html.twig';
import TwigTemplate from '../../lib/parse.js';

function StandardsTable(props) {
  const scoreDescriptors = props.scores.scoreDescriptors;
  const translations = props.translations;
  if (scoreDescriptors.length < 1) {
    return null;
  }

  let results = [];
  scoreDescriptors.forEach(scoreDescriptor => {
    const category = scoreDescriptor.ScoreCategory;
    results[category] = scoreDescriptor.Description;
  });

  const table = `
    <table>
       <caption>${translations.st_standards_title}</caption>
       <thead>
         <tr>
           <th scope="col">${translations.st_area_inspected}</th>
           <th scope="col">${translations.st_standards_found}</th>
         </tr>
       </thead>
        <tbody>
          <tr>
            <td>
              <div>
                <strong>${translations.st_hygienic_food_handling_label}</strong>
                <p>${translations.st_hygienic_food_handling_description}</p>        
              </div>
            </td>
            <td>${results.Hygiene}</td>
          </tr>
          <tr>
            <td>
              <div>
                <strong>${translations.st_hygienic_cleanliness_label}</strong>
                <p>${translations.st_hygienic_cleanliness_description}</p>  
              </div>   
            </td>
            <td>${results.Structural}</td>
          </tr>
          <tr>
            <td>
              <div>
                <strong>${translations.st_hygienic_management_label}</strong>
                <p>${translations.st_hygienic_management_description}</p>  
              </div>
            </td>
            <td>${results.Confidence}</td>
          </tr>
       </tbody>
    </table>
  `;

  const content = {
    content: table,
  };
  return (
    <>
      <TwigTemplate template={textBlock} values={content} attribs={[]}/>
    </>
  )
}

export default StandardsTable;