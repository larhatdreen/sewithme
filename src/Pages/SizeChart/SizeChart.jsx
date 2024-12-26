import React from 'react'

import './SizeChart.css'

import Table from '../../Components/Table/Table';
import Sale from '../../Components/Sale/Sale';

export default function SizeChart({ t }) {

  const firstTableData = {
    header: [t('size_rus'), "40(34)", "42(36)", "44(38)", "46(40)", "48(42)", "50(44)", "52(46)", "54(48)"],
    rows: [
      [`${t('cut_1')} |||`, "80", "84", "88", "92", "96", "100", "104", "108"],
      [t('cut_2'), "60", "63", "68", "72", "76", "80", "84", "89"],
      [t('cut_3'), "88", "92", "96", "100", "104", "108", "112", "116"],
      [t('cut_4'), "25", "26", "28", "29", "30", "32", "33", "34"],
    ]
  };

  const secondTableData = {
    header: [t('size'), "XS(40)", "S(42-44)", "M(46-48)", "L(50-52)", "XL(54-56)"],
    rows: [
      [`${t('cut_1')} |||`, "80", "84-88", "92-96", "100-104", "108-112"],
      [t('cut_2'), "60", "64-68", "72-76", "80-84", "89-94"],
      [t('cut_3'), "88", "92-96", "100-104", "108-112", "116-120"],
    ]
  };

  const thirdTableData = {
    header: [t('height'), t('height_group')],
    rows: [
      [`| ${t('height_small')}`, "158-164"],
      [`|| ${t('height_small')}`, "164-170"],
      [`||| ${t('height_small')}`, "170-176"],
    ]
  };

  const fourTableData = {
    header: [t('height'), "158-164", "164-170", "170-176"],
    rows: [
      [t('dts'), "41,7-42,9", "42,9-44,1", "44,1-45,3"],
      [t('dtp'), "42,5-43,4", "43,4-44,3", "44,3-45,2"],
    ]
  };

  const fiveTableData = {
    header: [t('size'), `${t('circle_had')}, ${t('cm')}`],
    rows: [
      ['XS', "53-54"],
      ['S', "55-56"],
      ['M', "57-58"],
      ['L', "59-60"],
      ['XL', "61-62"],
    ]
  };

  return (
    <div className='sizeChartPage'>
      <h1 className='sizeChartTitle'>{t('size_chart')}</h1>
      <div className="determineContainer">
        <h2>{t('to_determine')}</h2>
        <div className="determineText">
          <h3>{t('girth')}</h3>
          <p>{t('your_parameters')}</p>
        </div>
        <div className="determineText">
          <h3>{t('how_to_measure_1')}</h3>
          <p>{t('how_to_measure_text_1')}</p>
        </div>
        <div className="determineText">
          <h3>{t('how_to_measure_2')}</h3>
          <p>{t('how_to_measure_text_2')}</p>
        </div>
        <div className="determineText">
          <h3>{t('how_to_measure_3')}</h3>
          <p>{t('how_to_measure_text_3')}</p>
        </div>
      </div>
      <Table data={firstTableData} />
      <p className='selectSizeText'>{t('select_size_1')} <span>{t('select_size_2')}</span> {t('select_size_3')} <span>{t('select_size_4')}</span></p>
      <div className="tables">
        <Table data={secondTableData} />
        <Table data={thirdTableData} />
        <Table data={fourTableData} />
      </div>
      <div className="determineText outside">
        <h3>{t('measure_had')}</h3>
        <p>{t('measure_had_text')}</p>
      </div>
      <div className="table">
        <Table data={fiveTableData} />
      </div>
      <Sale t={t} />
     </div>
  )
}
