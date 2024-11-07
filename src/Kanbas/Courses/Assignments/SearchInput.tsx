import { CiSearch } from 'react-icons/ci';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function SearchInput() {
    const [searchTerm, setSearchTerm] = useState('');
    const { cid } = useParams();
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);

    // 过滤当前课程的作业
    const filteredAssignments = assignments.filter((assignment: any) => {
        return assignment.course === cid && 
               assignment.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="input-group">
            <div className="input-group-prepend">
                <span className="input-group-text">
                    <CiSearch />
                </span>
            </div>
            <input
                type="text"
                className="form-control"
                placeholder="Search for Assignments"
                id="wd-search-assignment"
                value={searchTerm}
                onChange={handleSearch}
                list="assignments-list"
            />
            <datalist id="assignments-list">
                {filteredAssignments.map((assignment: any) => (
                    <option key={assignment._id} value={assignment.title} />
                ))}
            </datalist>
        </div>
    );
}
