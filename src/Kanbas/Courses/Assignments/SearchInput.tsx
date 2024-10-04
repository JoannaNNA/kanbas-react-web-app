import { CiSearch } from 'react-icons/ci';

export default function SearchInput() {
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
            />
        </div>
    );
}
