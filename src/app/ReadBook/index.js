import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { DataGrid } from '@mui/x-data-grid';
import { columns } from '../common/common.const';
import { GlobalContext } from '../common/store/DataProvider';

const ReadBook = () => {
  const { data } = useContext(GlobalContext);

  const getRowId = (row) => {
    return row._id;
  };

  return (
      <DataGrid
        getRowId={getRowId}
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
  )
}

ReadBook.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string,
    country: PropTypes.string,
    id: PropTypes.number,
    imageLink: PropTypes.string,
    language: PropTypes.string,
    link: PropTypes.string,
    pages: PropTypes.number,
    title: PropTypes.string,
    year: PropTypes.number
  }),)
};

export default ReadBook