-- 코드를 입력하세요
SELECT ao.ANIMAL_ID, ao.NAME
from animal_ins ai
left join animal_outs ao on ai.animal_id = ao.animal_id
where ao.datetime < ai.datetime
order by ai.datetime