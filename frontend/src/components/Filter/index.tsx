import 'flatpickr/dist/themes/material_green.css';
import flatpickrLib from 'flatpickr';
import { Portuguese } from 'flatpickr/dist/l10n/pt';

import FlatPickr from 'react-flatpickr';

import './styles.scss';

flatpickrLib.localize(Portuguese);

const onChangeDate = (dates: Date[]) => {
    console.log(dates)
};


export default function Filter() {
    return (
        <div className="filter-container base-card">
            <FlatPickr
                options={{
                    mode: 'range',
                    dateFormat: 'd/m/Y',
                    showMonths: 2
                }}
                className="filter-input"
                onChange={onChangeDate}
                placeholder="Selecione um período"
            />

            <select className="filter-input">
                <option value="">Selecione um gênero</option>
                <option value="MALE">Masculino</option>
                <option value="FEMALE">Feminino</option>
                <option value="OTHER">Outro</option>
            </select>
        </div>
    )
}
