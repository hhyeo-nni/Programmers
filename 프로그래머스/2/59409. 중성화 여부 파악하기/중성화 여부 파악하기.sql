-- 코드를 입력하세요
SELECT animal_id, name, 
case when substring_index(sex_upon_intake,' ',1) = 'Neutered' then 'O'
when substring_index(sex_upon_intake,' ',1) = 'Spayed' then 'O' else 'X' end as 중성화
from animal_ins