import { Multiselect } from "multiselect-react-dropdown";
import { useState } from "react";
import "../css/login.css";
type PersonalDetailsData = {
    nationality: string;
    language: string[];
}

type PersonalDetailsProp = PersonalDetailsData & {
    updateFields: (fields: Partial<PersonalDetailsData>) => void
}

export function PersonalDetails({ nationality, updateFields }: PersonalDetailsProp) {

    const options = [
        { key: 'English', value: 'English' },
        { key: 'Tamil', value: 'Tamil' },
        { key: 'Hindi', value: 'Hindi' },
        { key: 'Telugu', value: 'Telugu' },
        { key: 'Kannada', value: 'Kannada' }
    ];

    const [selectedLanguages, setSelectedLanguages] = useState([]);


    const handleSelect = (selectedList: any[]) => {
        setSelectedLanguages(selectedList);
        const selectedValue = selectedList.map((item) => item.value);
        updateFields({ language: selectedValue });
    }

    return (
        <div className="outline">
            <h3>Personal Details</h3>
            <div className="regDiv">
                <label>Nationality</label>
                <input autoFocus required value={nationality}
                    type="text"
                    onChange={e => updateFields({ nationality: e.target.value })} />
            </div>
            <div className="refDiv">
                <label style={{ margin: "30px" }}>Language Spoken</label>
                <div className="multiselect">
                    <Multiselect
                        options={options}
                        onSelect={handleSelect}
                        onRemove={handleSelect}
                        displayValue="value"
                        selectedValues={selectedLanguages}
                    />
                </div>
            </div>
        </div>
    );
}