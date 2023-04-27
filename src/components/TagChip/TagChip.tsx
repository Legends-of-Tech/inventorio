import React from 'react'
import TagChipItem from './TagChipItem/TagChipItem';


type Props = {
    className: string;
}

const TagChip = ({className}: Props) => {
  return (
      <div className={`${className} d-flex`}>
          <TagChipItem label="Trơn" path='/'/>
      </div>
  )
}

export default TagChip