-- 코드를 입력하세요
SELECT ai.animal_id, ai.animal_type, ai.name
from animal_ins ai
left join animal_outs ao on ai.animal_id = ao.animal_id
where substr(ai.sex_upon_intake,1,instr(ai.sex_upon_intake,' ',1,1)-1) = 'Intact'
and substr(ai.sex_upon_intake,1,instr(ai.sex_upon_intake,' ',1,1)-1) <> substr(ao.sex_upon_outcome,1,instr(ao.sex_upon_outcome,' ',1,1)-1)