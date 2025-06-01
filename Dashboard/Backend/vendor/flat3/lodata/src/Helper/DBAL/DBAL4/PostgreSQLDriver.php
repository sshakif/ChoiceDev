<?php

declare(strict_types=1);

namespace Flat3\Lodata\Helper\DBAL\DBAL4;

use Doctrine\DBAL\Driver\AbstractPostgreSQLDriver;

class PostgreSQLDriver extends AbstractPostgreSQLDriver
{
    use ConnectsToDatabase;
}