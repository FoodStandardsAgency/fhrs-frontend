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
    const description = scoreDescriptor.Description;
    results[category] = description;
  });

  const table = '<table>' +
    '<tr>' +
    `<th>${translations.st_area_inspected}</th>` +
    `<th>${translations.st_standards_found}</th>` +
    '</tr>' +
    '<tr>' +
    '<td>' +
    `<strong>${translations.st_hygienic_food_handling_label}</strong>` +
    `<p>${translations.st_hygienic_food_handling_description}</p>` +
    '</td>' +
    `<td>${results.Hygiene}</td>` +
    '</tr>' +
    '<tr>' +
    '<td>' +
    `<strong>${translations.st_hygienic_cleanliness_label}</strong>` +
    `<p>${translations.st_hygienic_cleanliness_description}</p>` +
    '</td>' +
    `<td>${results.Structural}</td>` +
    '</tr>' +
    '<tr>' +
    '<td>' +
    `<strong>${translations.st_hygienic_management_label}</strong>` +
    `<p>${translations.st_hygienic_management_description}</p>` +
    '</td>' +
    `<td>${results.Confidence}</td>` +
    '</tr>' +
    '</table>'

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