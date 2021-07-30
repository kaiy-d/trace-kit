/*
    Clip List Component
*/

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

import { reorderClips, updatePlayIndex } from '../../redux/actions'

import ClipListItem from './ClipListItem'

const getItemStyle = (isDragging, draggableStyle) => ({
    ...draggableStyle,
    borderBottom: '1px solid #E6E4E1',
    opacity: '100%',
    background: 'white',
    ...(isDragging && {
        boxShadow: '0px 5px 10px rgba(08, 08, 08, 0.15)',
    })
})

// Reorder clips on drag & drop
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)
    return result
}

const ClipList = ({ clipList }) => {

    const dispatch = useDispatch()
    const playIndex = useSelector(({ playIndex }) => playIndex)

    // Reorder clips on drag & drop
    const onReorderClips = result => {
        if (!result.destination) return

        const updatedClips = reorder(
            clipList,
            result.source.index,
            result.destination.index
        )

        // reset store of current playindex on drag & drop
        if (playIndex !== 0) {
            if (playIndex === result.destination.index + 1) {
                dispatch(updatePlayIndex(result.source.index + 1))
            }
            if (playIndex === result.source.index + 1) {
                dispatch(updatePlayIndex(result.destination.index + 1))
            }
        }
        dispatch(reorderClips(updatedClips))
    }
    
    return (
        <div className='clip-List'>
            <DragDropContext onDragEnd={onReorderClips}>
                <Droppable droppableId="droppable">
                    {(provided) => (
                        <div ref={provided.innerRef}>
                            {clipList && clipList.map((item, index) => (
                                <Draggable key={`${index}`} draggableId={`${index}`} index={index}>
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            style={getItemStyle(
                                                snapshot.isDragging,
                                                provided.draggableProps.style
                                            )}
                                        >
                                            <ClipListItem
                                                clipItem={item}
                                                rowIndex={index}
                                                selected={playIndex === (index + 1) ? true : false}
                                            />
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    )
}

export default ClipList